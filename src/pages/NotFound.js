import { Header } from "../components/Header"

export const NotFoundPage = () => {
    return /*html*/ `
      ${Header()}
      <h1> Không tìm thấy đường dẫn </h1>
      <a href="/"> Quay về trang chủ </a>
    `
  }