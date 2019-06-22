import React, { Component } from "react";
import styles from "./styles.css";
import RenderPageNumbers from "./components/renderPageNumbers";
import calcpagenumbers from "./components/calcpagenumbers";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, name: "Nuno Soares", job: "Developer" },
        { id: 2, name: "Maria Ines", job: "Designer" },
        { id: 3, name: "João Santos", job: "Developer" },
        { id: 4, name: "Joana Cardoso", job: "UX Designer" },
        { id: 5, name: "Rita Santos", job: "UX Designer" },
        { id: 6, name: "Simão Gomes", job: "Developer" },
        { id: 7, name: "Silva Soares", job: "Designer" },
        { id: 8, name: "Manuela Silva", job: "UX Designer" },
        { id: 9, name: "Josefina Antonieta", job: "Developer" },
        { id: 10, name: "Marcela Marcelina", job: "UX Designer" },
        { id: 11, name: "Iolanda Pires", job: "CTO" },
        { id: 12, name: "Nuno Silva", job: "UX Designer" },
        { id: 13, name: "José Gomes", job: "UX Designer" },
        { id: 14, name: "Josefina Guedes", job: "Designer" },
        { id: 15, name: "Rafa Almeida", job: "UX Designer" },
        { id: 16, name: "Carolina Carol", job: "Developer" },
        { id: 17, name: "Quim Barreiros", job: "UX Designer" },
        { id: 18, name: "Antonio Barreiras", job: "UX Designer" }
      ],
      currentPage: 1,
      ItemsPerPage: 3,
      pageNumbers: null
    };
    this.handleClickPagination = this.handleClickPagination.bind(this);
  }

  componentDidMount() {
    let numberOfPages = calcpagenumbers(
      this.state.todos,
      this.state.ItemsPerPage
    );
    numberOfPages !== null &&
      this.setState({
        pageNumbers: numberOfPages
      });
  }

  handleClickPagination(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { todos, currentPage, ItemsPerPage, pageNumbers } = this.state;

    const indexOfLastItem = currentPage * ItemsPerPage;
    const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
    const currentItems = todos.slice(indexOfFirstItem, indexOfLastItem);

    const renderContent = currentItems.map((item, index) => {
      return (
        <li key={index}>
          {item.name} ({item.job})
        </li>
      );
    });

    return (
      <div>
        <ul>{renderContent}</ul>
        <ul id="page-numbers">
          <RenderPageNumbers
            currentPage={currentPage}
            pageNumbers={pageNumbers}
            onClickPagination={this.handleClickPagination}
          />
        </ul>
      </div>
    );
  }
}
