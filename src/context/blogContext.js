import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    return <BlogContext.Provider value={'abc'} >
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;