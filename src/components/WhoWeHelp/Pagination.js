const Pagination = ({postsPerPage, totalPosts, pagin}) => {
    const pageNumbers = [];
    const changePagin = (e, number) => {
        e.preventDefault();
        pagin(number);
    }

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number, index) =>(
                    <li
                        key={index}
                        className="home-who-we-help-number-button"
                    >
                        <a
                            onClick={(e) => changePagin(e,index+1)}
                            href="#"
                            className="page-link">
                        {number}</a></li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;