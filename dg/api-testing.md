<frontmatter>
  header: header.md
  title: "DG: API Testing"
  pageNav: 2
  siteNav: dg-nav.md
  footer: footer.md
</frontmatter>

# API Testing

This page contains information useful for testing and creation of queries used in WATcher.

-------------------------------------------------------------------------------------

# Postman Set Up

[Workspace can be found here!](https://www.postman.com/orange-station-77364/watcher/overview)

## Getting Started

**Prerequisites:**
* [Postman](https://www.postman.com/) account
* [GitHub token](https://www.postman.com/) -- visit the link to learn how to get your token

**Steps**

<box type="tip" seamless>

All the following actions are done in Postman.
</box>

1. Create an empty workspace to fork to
1. Fork this [collection](https://www.postman.com/orange-station-77364/watcher/collection/67d861f681942940507d4259) to your workspace using the fork button at the top right corner
1. Create a file `schema.graphql` on your local machine
1. Paste the following schema and save
    ```
    type Issue {
      id: ID!
      number: Int!
      title: String!
      body: String
      state: String!
      createdAt: String!
      updatedAt: String!
      url: String!
      isDraft: Boolean  # Your custom extension
    }
    ```
1. Select any query
1. Click on the `Schema` tab
1. Click on `Import a GraphQL schema`
1. Select `schema.graphql` file on your local machine
1. Click on `Import as API` to save it online

## Environment Variables

<box type="tip" seamless>

The environment section is used to store sensitive data which are only meant for yourself. An example of sensitive data will be your GitHub token.
</box>

1. Create a new environment by clicking on the dropdown that says `No environment` at the top right corner
1. Click on the + button
1. Add the following variables
   | Variable | Type | Initial value | Current value |
   |----------|------|---------------|---------------|
   | username | default | <YOUR_GITHUB_USERNAME> | <YOUR_GITHUB_USERNAME> |
   | token    | secret  | <YOUR_GITHUB_TOKEN> | <YOUR_GITHUB_TOKEN> |

# Understanding Queries

The queries used in WATcher are created with the use of fragment queries. Fragment query is a reusable unit that allows you to define parts of a query and use them in multiple places. This can be found in `graphql > fragments` in WATcher and in the `Fragments` folder in Postman.

Due to limitations in Postman, any fragments used should be added to the query section as well.

### Cursor

In some queries, you will see a cursor argument. The cursor is mainly used for the pagination of queries.
* The initial value starts with `null`
* Each query will generate a cursor which you will need to include as an argument for the the next query

# Creating A New Query
<box type="tip" seamless>

It would be quicker to duplicate an existing query as the authorization and schema will be copied as well.

</box>

1. Add a new GraphQL query in the WATcher collection
2. In the `Authorization` tab select `Basic Auth` as the Auth Type
3. Use `{{username}}` and `{{token}}` in the username and password field respectively. This uses the variables in your environment
4. In the `Query` tab, you will be able to import your schema, add your query and the relevant variables

# Testing Queries
1. In the `Query` tab, the arguments used for the select query can be changed in the `Variables` section.
1. Click on the `Query` button
1. You should see the response from the query from the `Response` section
