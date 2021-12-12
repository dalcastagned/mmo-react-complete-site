import React, { useState, useEffect } from 'react';
import { getLatestNews } from '../../services/Api';
import { SearchBar } from "../SearchBar/SearchBar";
import {
    PageTitle,
    ContainerNews,
    CardNews,
    TitleNews,
    ThumbnailNews,
    ShortDescriptionNews,
    ContainerInfoNews
} from './LatestNews.elements';
import {
    ContainerImages,
    ErrorImg,
    LoadingIMG,
} from '../../styles/globalStyles'

const LatestNews = ({isDarkTheme}) => {
    const [latestNews, setlatestNews] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(0);
    const [filteredNews, setFilteredNews] = useState([]);

    useEffect(() => {
        getLatestNews("latestnews")
            .then((data) => {
                setlatestNews(data);
                setLoaded(true);
            })
            .catch(function (err) {
                setError(true);
                setLoaded(true);
            });
    }, []);

    if (error === true) {
        return (
            <ContainerImages>
                <ErrorImg src='https://i.ibb.co/GPBYtqK/error.png' alt='Error!' />
            </ContainerImages>
        )
    }
    else if (loaded === false) {
        return (
            <ContainerImages>
                {isDarkTheme
                    ? <LoadingIMG src='https://i.ibb.co/CmhYx2h/loading-light.gif' alt='loading...' />
                    : <LoadingIMG src='https://i.ibb.co/9cV76wq/loading-dark.gif' alt='loading...' />
                }
            </ContainerImages>
        )
    } else {
        return (
            <>
                <PageTitle>Latest News</PageTitle>
                <SearchBar
                    sourceList={latestNews}
                    setList={setFilteredNews}
                    listSize={filteredNews.length}
                    placeholder={"Search News"}
                />
                <ContainerNews>
                    {filteredNews.map((latestNews) => (
                        <CardNews href={latestNews.article_url} target="_blank">
                            <ThumbnailNews src={latestNews.thumbnail} alt={`${latestNews.title} News thumbnail`} />
                            <ContainerInfoNews>
                                <TitleNews>{latestNews.title}</TitleNews>
                                <ShortDescriptionNews>{latestNews.short_description.length > 130
                                    ? latestNews.short_description.substring(0, 127) + "..."
                                    : latestNews.short_description}</ShortDescriptionNews>
                            </ContainerInfoNews>
                        </CardNews>
                    ))}
                </ContainerNews>
            </>
        )
    }
};

export default LatestNews
