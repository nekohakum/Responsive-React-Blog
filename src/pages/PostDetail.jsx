import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import Thumbnail from "../images/blog22.jpg";

const PostDetail = () => {
    return (
        <section className="post-detail">
            <div className="container post-detail_container">
                <div className="post-detail_header">
                    <PostAuthor />
                    <div className="post-detail_buttons">
                        <Link
                            to={`/posts/werwer/edit`}
                            className="btn sm primary"
                        >
                            Edit
                        </Link>
                        <Link
                            to={`/posts/werwer/delete`}
                            className="btn sm danger"
                        >
                            Delete
                        </Link>
                    </div>
                </div>
                <h1>This is the post title</h1>
                <div className="post-detail_thumbnail">
                    <img src={Thumbnail} alt="" />
                </div>
                <p>
                    lorde idsjdfh isajfd iasejo idajsd iasdj aieidjgajgd hhad
                    hahdfa sdhf hadsjkfh wie ohadsghf adj kfhwej oasdh asheo
                    ihadshva oehf eof had sdhfao isdhf ha h oadhsf ha hoiah
                    sdofh weoh a
                </p>
                <p>
                    lorde idsjdfh isajfd iasejo idajsd iasdj aieidjgajgd hhad
                    hahdfa sdhf hadsjkfh wie ohadsghf adj kfhwej oasdh asheo
                    ihadshva oehf eof had sdhfao isdhf ha h oadhsf ha hoiah
                    sdofh weoh a
                </p>
                <p>
                    lorde idsjdfh isajfd iasejo idajsd iasdj aieidjgajgd hhad
                    hahdfa sdhf hadsjkfh wie ohadsghf adj kfhwej oasdh asheo
                    ihadshva oehf eof had sdhfao isdhf ha h oadhsf ha hoiah
                    sdofh weoh a
                </p>
                <p>
                    lorde idsjdfh isajfd iasejo idajsd iasdj aieidjgajgd hhad
                    hahdfa sdhf hadsjkfh wie ohadsghf adj kfhwej oasdh asheo
                    ihadshva oehf eof had sdhfao isdhf ha h oadhsf ha hoiah
                    sdofh weoh a
                </p>
                <p>
                    lorde idsjdfh isajfd iasejo idajsd iasdj aieidjgajgd hhad 
                    hahdfa sdhf hadsjkfh wie ohadsghf adj kfhwej oasdh asheo
                    ihadshva oehf eof had sdhfao isdhf ha h oadhsf ha hoiah
                    sdofh weoh a
                </p>
                <p>
                    lorde idsjdfh isajfd iasejo idajsd iasdj aieidjgajgd hhad
                    hahdfa sdhf hadsjkfh wie ohadsghf adj kfhwej oasdh asheo
                    ihadshva oehf eof had sdhfao isdhf ha h oadhsf ha hoiah
                    sdofh weoh a
                </p>
                <p>
                    lorde idsjdfh isajfd iasejo idajsd iasdj aieidjgajgd hhad
                    hahdfa sdhf hadsjkfh wie ohadsghf adj kfhwej oasdh asheo
                    ihadshva oehf eof had sdhfao isdhf ha h oadhsf ha hoiah
                    sdofh weoh a
                </p>
            </div>
        </section>
    );
};

export default PostDetail;
