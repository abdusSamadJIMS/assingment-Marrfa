import { Articles } from '@/lib/types'
import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import Link from 'next/link'

const ResultContainer = ({ articles }: { articles: Articles }) => {

    const formateDate = (date: string) => {
        const dateObject = new Date(date)
        return dateObject.toLocaleDateString('en-US', { year: "numeric", month: "long", day: "numeric" })
    }

    if (articles.length <= 0) {
        return <section
            className='flex justify-center items-center text-2xl font-bold text-muted-foreground underline'
        >No articles found.</section>
    }


    return (
        <section
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'
        >
            {articles.map((article, indx) => (
                <Link
                    target='_blank'
                    href={article.url}
                    className='block rounded-lg'
                    key={indx}
                >
                    <Card

                        key={article.title || indx}>
                        <CardContent className=' pt-5'>
                            <figure
                                className='sm:h-40 h-32 bg-cover bg-no-repeat bg-center
                            rounded-lg
                            '
                                style={{
                                    backgroundImage: `url(${article.urlToImage || "https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
                                }}

                            >
                                <figcaption className='p-2'>
                                    <p
                                        className='bg-foreground w-fit p-1 text-background text-xs'
                                    >{formateDate(article.publishedAt)}</p>
                                </figcaption>
                            </figure>
                        </CardContent>
                        <CardFooter>
                            <CardTitle className='line-clamp-2'>{article.title}</CardTitle>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </section>
    )
}

export default ResultContainer