import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import readMDFile from './utils';
import { useState,useEffect } from 'react';
import "./Blog-dark.css";


function Blog(props) {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            const content = await readMDFile("DemoFile.md");
            console.log(content);
            setMarkdownContent(content);
        };
        fetchMarkdown();
    }, []);
    return (
        <div className='blog-container'>
            <Markdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
            </Markdown>
        </div>
    );
}

export default Blog;