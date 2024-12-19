import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {readMDFile} from './utils';
import { useState,useEffect } from 'react';
import "./Blog.css";


function Blog(props) {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            const content = await readMDFile("DemoFile.md");
            setMarkdownContent(content);
        };
        fetchMarkdown();
    }, []);
    return (
        <div className='blog-container'>
            <Markdown remarkPlugins={[remarkGfm, remarkMath] } rehypePlugins={[rehypeKatex]}>
                {markdownContent}
            </Markdown>
        </div>
    );
}

export default Blog;