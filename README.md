<h1 align="center">
  <a href='#'><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="600px"/></a>
  <br>
  <br>
  <div>
    <a href="https://github.com/marcelldac/contact-book-api-aula/issues">
      <img src="https://img.shields.io/github/issues/marcelldac/contact-book-api-aula?color=fab387&labelColor=303446&style=for-the-badge">
    </a>
    <a href="https://github.com/marcelldac/contact-book-api-aula/stargazers">
      <img src="https://img.shields.io/github/stars/marcelldac/contact-book-api-aula?color=ca9ee6&labelColor=303446&style=for-the-badge">
    </a>
    <a href="https://github.com/marcelldac/contact-book-api-aula">
      <img src="https://img.shields.io/github/repo-size/marcelldac/contact-book-api-aula?color=ea999c&labelColor=303446&style=for-the-badge">
    </a>
  </div>
</h1>

<div align='center'>
  
# Contact Book API

API created for the classes I taught to my dear friend [@rodolphoreis](https://www.github.com/rodolphoreis). The API we developed represents a contact book. We built it using arrays and their methods to manage the data.

</div>

## API Documentation


#### Returns all contacts

```http
  GET /contacts
```

#### Create a Contact

```http
  POST /contacts
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Mandatory**. present in body request.|
| `phone`      | `string` | **Mandatory**. present in body request.|
| `isActive`      | `string` | **Mandatory**. present in body request.|

#### Update a Contact

```http
  PUT /contacts
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Mandatory**. present in body request.|
| `phone`      | `string` | **Mandatory**. present in body request.|
| `isActive`      | `string` | **Mandatory**. present in body request.|

#### Update on property of a Contact

```http
  PATCH /contacts
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | Present in body request.|
| `phone`      | `string` |Present in body request.|
| `isActive`      | `string` | Present in body request.|

#### Delete a Contact

```http
  DELETE /contacts
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | Present in body request.|
| `phone`      | `string` |Present in body request.|
| `isActive`      | `string` | Present in body request.|

## Authors

- [@marcelldac](https://www.github.com/marcelldac)
- [@rodolphoreis](https://www.github.com/rodolphoreis)
