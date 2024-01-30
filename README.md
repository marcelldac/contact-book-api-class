
# Contact Book API

Made with Javascript and the Express lib for node.


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
| `id`      | `string` | Not present in body request 
| `name`      | `string` | **Mandatory**. present in body request.|
| `phone`      | `string` | **Mandatory**. present in body request.|
| `isActive`      | `string` | **Mandatory**. present in body request.|
| `updatedAt`      | `string - null` | Not present in body request.|
| `createdAt`      | `string` | Not present in body request.|


## Author

- [@marcelldac](https://www.github.com/marcelldac)

