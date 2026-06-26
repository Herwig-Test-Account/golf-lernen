export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const GrundlagenPartsFragmentDoc = gql`
    fragment GrundlagenParts on Grundlagen {
  __typename
  title
  lead
  description
  image
  image_credit
  kapitel
  weight
  lesezeit
  stand
  tags
  draft
  body
}
    `;
export const GlossarPartsFragmentDoc = gql`
    fragment GlossarParts on Glossar {
  __typename
  title
  term_alt
  synonyme
  draft
  body
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  date
  draft
  description
  tags
  body
}
    `;
export const GrundlagenDocument = gql`
    query grundlagen($relativePath: String!) {
  grundlagen(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GrundlagenParts
  }
}
    ${GrundlagenPartsFragmentDoc}`;
export const GrundlagenConnectionDocument = gql`
    query grundlagenConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GrundlagenFilter) {
  grundlagenConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GrundlagenParts
      }
    }
  }
}
    ${GrundlagenPartsFragmentDoc}`;
export const GlossarDocument = gql`
    query glossar($relativePath: String!) {
  glossar(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GlossarParts
  }
}
    ${GlossarPartsFragmentDoc}`;
export const GlossarConnectionDocument = gql`
    query glossarConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GlossarFilter) {
  glossarConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GlossarParts
      }
    }
  }
}
    ${GlossarPartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    grundlagen(variables, options) {
      return requester(GrundlagenDocument, variables, options);
    },
    grundlagenConnection(variables, options) {
      return requester(GrundlagenConnectionDocument, variables, options);
    },
    glossar(variables, options) {
      return requester(GlossarDocument, variables, options);
    },
    glossarConnection(variables, options) {
      return requester(GlossarConnectionDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
