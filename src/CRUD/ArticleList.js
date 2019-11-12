import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticle } from "./../actions/articleAction";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../css/customCard.css";

class ArticleList extends Component {
  componentDidMount() {
    this.props.fetchArticle();
    
  }
  render() {
    return (
      <div class="container-fluid">
        <div className="row">
          {this.props.article.map(res => (
            <div class="card card-blue col-md-4">
              <li>
                <p class="card-question">{res.TITLE}</p>
                <p className="text-align-justify">{res.DESCRIPTION}</p>
                <a href="https://en.wikipedia.org/wiki/List_of_the_verified_oldest_people">
                  View For Detail
                </a>
              </li>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mTp = centralStore => {
  return {
    article: centralStore.articleR.articles
  };
  
};

export default connect(
  mTp,
  { fetchArticle }
)(ArticleList);
