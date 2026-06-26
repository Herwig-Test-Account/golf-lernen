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
export const MagazinPartsFragmentDoc = gql`
    fragment MagazinParts on Magazin {
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
export const MagazinDocument = gql`
    query magazin($relativePath: String!) {
  magazin(relativePath: $relativePath) {
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
    ...MagazinParts
  }
}
    ${MagazinPartsFragmentDoc}`;
export const MagazinConnectionDocument = gql`
    query magazinConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: MagazinFilter) {
  magazinConnection(
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
        ...MagazinParts
      }
    }
  }
}
    ${MagazinPartsFragmentDoc}`;
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
    magazin(variables, options) {
      return requester(MagazinDocument, variables, options);
    },
    magazinConnection(variables, options) {
      return requester(MagazinConnectionDocument, variables, options);
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
      url: "https://content.tinajs.io/2.4/content/24b80e88-e29e-470b-a335-fa03e39683d6/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
