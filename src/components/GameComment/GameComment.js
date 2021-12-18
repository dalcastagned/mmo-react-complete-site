import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import {
    ContainerForm,
    InputName,
    InputComment,
    ErrorTextContainer,
    ErrorText,
    ButtonSubmit,
    Title,
    CommentContainer,
    CommentName,
    Comment,
    CommentInfoContainer,
    CommentLikeContainer,
    UpIcon,
    DownIcon,
    LikeCount
} from './GameComment.elements'

const GameComment = ({ game }) => {

    let listComments = []
    let commentId = 1
    let likeCount = 0
    let dataComments = JSON.parse(localStorage.getItem(game))
    const [renderComments, setRenderComments] = useState([])

    if (dataComments != null) {
        commentId = dataComments.length + 1
    }

    useEffect(() => {
        setRenderComments(dataComments)
    },[]);

    const sumLike = (index) => {
        dataComments[index].likeCount = dataComments[index].likeCount + 1
        localStorage.setItem(game, JSON.stringify(dataComments));
        setRenderComments(dataComments)
    }

    const subLike = (index) => {
        dataComments[index].likeCount = dataComments[index].likeCount - 1
        localStorage.setItem(game, JSON.stringify(dataComments));
        setRenderComments(dataComments)
    }

    const handleCommentStorage = (values) => {
        if (dataComments != null) {
            listComments = dataComments
            listComments.unshift({
                id: commentId,
                name: values.name,
                comment: values.comment,
                likeCount: likeCount
            })
        } else {
            listComments.unshift({
                id: commentId,
                name: values.name,
                comment: values.comment,
                likeCount: likeCount
            })
        }
        localStorage.setItem(game, JSON.stringify(listComments));

        setRenderComments(listComments)
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            comment: "",
        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required("Name is required."),
            comment: yup
                .string()
                .required("Comment is required")
        }),
        onSubmit: (values) => {
            handleCommentStorage(values);
        },
    });

    return (
        <>
            <Title>Comments</Title>
            <ContainerForm onSubmit={formik.handleSubmit}>
                <InputName
                    id="name"
                    name="name"
                    type="text"
                    placeholder='Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <ErrorTextContainer>
                        <ErrorText>{formik.errors.name}</ErrorText>
                    </ErrorTextContainer>
                ) : <ErrorTextContainer />}
                <InputComment
                    id="comment"
                    name="comment"
                    type="text"
                    rows="5"
                    placeholder='Comment'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                />
                {formik.touched.comment && formik.errors.comment ? (
                    <ErrorTextContainer>
                        <ErrorText>{formik.errors.comment}</ErrorText>
                    </ErrorTextContainer>
                ) : <ErrorTextContainer />}
                <ButtonSubmit type="submit">Submit</ButtonSubmit>
            </ContainerForm>
            {renderComments != null &&
                renderComments.map((renderComments, index) => (
                    <CommentContainer key={index}>
                        <CommentInfoContainer>
                            <CommentName>{renderComments.name}:</CommentName>
                            <Comment>{renderComments.comment}</Comment>
                        </CommentInfoContainer>
                        <CommentLikeContainer>
                            <DownIcon onClick={() => subLike(index)}>-</DownIcon>
                            <LikeCount color={renderComments.likeCount >=0 ? "#0a0" : "#a00"}>{renderComments.likeCount}</LikeCount>
                            <UpIcon onClick={() => sumLike(index)}>+</UpIcon>
                        </CommentLikeContainer>
                    </CommentContainer>
                ))}
        </>
    )
}

export default GameComment
