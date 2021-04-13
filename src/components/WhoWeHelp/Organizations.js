import {useState} from 'react';
import Pagination from "./Pagination";
import Posts from "./Posts";
import postsOrg from "./ListOfAvailableOrganizations";


const Organizations = () => {
    const [posts, setPosts] = useState([...postsOrg]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage,setPostPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    return(
        <div className="container home-who-we-help">
            <div className="is-one-third">
                <p className="has-text-centered home-who-we-help-paragraph">
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                    Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div className=
                         "column home-who-we-help-choices-box">
                    <div className='container mt-5'>
                        <Posts posts={currentPosts}  />

                        <div className="home-who-we-help-buttons-box">
                            <Pagination

                                postsPerPage={postsPerPage}
                                totalPosts={posts.length}
                                pagin={paginate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Organizations;