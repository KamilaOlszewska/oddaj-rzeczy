const Posts = ({posts}) => {
    return (
        <ul className='list-group mb-4'>
            {posts.map(post => (
                <div className="home-who-we-help-choice">
                    <div key={post.id}
                         className="home-who-we-help-choice-left">
                        <h5 className="home-who-we-help-choice-title">{post.name}</h5>
                        <p className="home-who-we-help-choice-paragraph">{post.goal}</p>
                    </div>
                    <p className="home-who-we-help-choice-paragraph-light">{post.stuff}</p>
                </div>
            ))}
        </ul>
    );
};

export default Posts;