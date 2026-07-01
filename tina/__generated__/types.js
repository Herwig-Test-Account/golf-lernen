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
  ... on GrundlagenArtikel {
    draft
    title
    description
    slug
    canonical
    robots
    hreflang
    image
    image_credit
    date
    lesezeit
    h1
    lead
    body
    tags
    kapitel
    weight
    stand
    json_ld
  }
  ... on GrundlagenUebersicht {
    draft
    title
    description
    slug
    canonical
    robots
    hreflang
    eyebrow
    h1
    lead
    kapitel_liste {
      __typename
      id
      label
      title
      desc
      nav_desc
    }
    json_ld
  }
}
    `;
export const GlossarPartsFragmentDoc = gql`
    fragment GlossarParts on Glossar {
  __typename
  ... on GlossarEintrag {
    draft
    title
    description
    slug
    canonical
    robots
    hreflang
    term_alt
    synonyme
    body
    json_ld
  }
  ... on GlossarUebersicht {
    draft
    title
    description
    slug
    canonical
    robots
    hreflang
    eyebrow
    h1
    lead
    json_ld
  }
}
    `;
export const MagazinPartsFragmentDoc = gql`
    fragment MagazinParts on Magazin {
  __typename
  ... on MagazinArtikel {
    draft
    title
    description
    teaser
    slug
    canonical
    robots
    hreflang
    image
    date
    lesezeit
    h1
    rubrik
    author
    body
    tags
    json_ld
  }
  ... on MagazinUebersicht {
    draft
    title
    description
    slug
    canonical
    robots
    hreflang
    eyebrow
    h1
    lead
    json_ld
  }
}
    `;
export const BundeslandPartsFragmentDoc = gql`
    fragment BundeslandParts on Bundesland {
  __typename
  draft
  title
  description
  slug
  canonical
  robots
  hreflang
  bundesland
  type
  lead
  body
  json_ld
}
    `;
export const Golf_KategorienPartsFragmentDoc = gql`
    fragment Golf_kategorienParts on Golf_kategorien {
  __typename
  draft
  title
  description
  slug
  canonical
  robots
  hreflang
  kategorie
  type
  lead
  body
  json_ld
}
    `;
export const LocationsPartsFragmentDoc = gql`
    fragment LocationsParts on Locations {
  __typename
  ... on LocationsArtikel {
    draft
    title
    description
    slug
    canonical
    robots
    hreflang
    image
    date
    bundesland
    untertitel
    kategorien
    greenfee_ab
    lochzahl
    schwierigkeit
    leihausruestung
    uebungsplatz
    driving_range
    restaurant
    hunde
    adresse
    website
    email
    telefon
    body
    tags
    json_ld
  }
  ... on LocationsUebersicht {
    draft
    title
    description
    slug
    canonical
    robots
    hreflang
    eyebrow
    h1
    lead
    json_ld
  }
}
    `;
export const GlobalPartsFragmentDoc = gql`
    fragment GlobalParts on Global {
  __typename
  ... on GlobalHomepage {
    title
    description
    canonical
    robots
    hreflang
    hero_tag
    hero_title
    hero_sub
    cta_primary_text
    cta_primary_url
    cta_secondary_text
    cta_secondary_url
    quotes {
      __typename
      text
      cite
    }
    grundlagen_label
    grundlagen_title
    grundlagen_intro
    grundlagen_karten {
      __typename
      icon
      titel
      text
      url
    }
    locations_label
    locations_title
    locations_intro
    magazin_label
    magazin_title
    magazin_intro
    json_ld
  }
}
    `;
export const LegalPartsFragmentDoc = gql`
    fragment LegalParts on Legal {
  __typename
  draft
  title
  description
  slug
  canonical
  robots
  hreflang
  type
  meta
  body
  json_ld
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
export const BundeslandDocument = gql`
    query bundesland($relativePath: String!) {
  bundesland(relativePath: $relativePath) {
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
    ...BundeslandParts
  }
}
    ${BundeslandPartsFragmentDoc}`;
export const BundeslandConnectionDocument = gql`
    query bundeslandConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BundeslandFilter) {
  bundeslandConnection(
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
        ...BundeslandParts
      }
    }
  }
}
    ${BundeslandPartsFragmentDoc}`;
export const Golf_KategorienDocument = gql`
    query golf_kategorien($relativePath: String!) {
  golf_kategorien(relativePath: $relativePath) {
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
    ...Golf_kategorienParts
  }
}
    ${Golf_KategorienPartsFragmentDoc}`;
export const Golf_KategorienConnectionDocument = gql`
    query golf_kategorienConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: Golf_kategorienFilter) {
  golf_kategorienConnection(
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
        ...Golf_kategorienParts
      }
    }
  }
}
    ${Golf_KategorienPartsFragmentDoc}`;
export const LocationsDocument = gql`
    query locations($relativePath: String!) {
  locations(relativePath: $relativePath) {
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
    ...LocationsParts
  }
}
    ${LocationsPartsFragmentDoc}`;
export const LocationsConnectionDocument = gql`
    query locationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: LocationsFilter) {
  locationsConnection(
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
        ...LocationsParts
      }
    }
  }
}
    ${LocationsPartsFragmentDoc}`;
export const GlobalDocument = gql`
    query global($relativePath: String!) {
  global(relativePath: $relativePath) {
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
    ...GlobalParts
  }
}
    ${GlobalPartsFragmentDoc}`;
export const GlobalConnectionDocument = gql`
    query globalConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GlobalFilter) {
  globalConnection(
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
        ...GlobalParts
      }
    }
  }
}
    ${GlobalPartsFragmentDoc}`;
export const LegalDocument = gql`
    query legal($relativePath: String!) {
  legal(relativePath: $relativePath) {
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
    ...LegalParts
  }
}
    ${LegalPartsFragmentDoc}`;
export const LegalConnectionDocument = gql`
    query legalConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: LegalFilter) {
  legalConnection(
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
        ...LegalParts
      }
    }
  }
}
    ${LegalPartsFragmentDoc}`;
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
    },
    bundesland(variables, options) {
      return requester(BundeslandDocument, variables, options);
    },
    bundeslandConnection(variables, options) {
      return requester(BundeslandConnectionDocument, variables, options);
    },
    golf_kategorien(variables, options) {
      return requester(Golf_KategorienDocument, variables, options);
    },
    golf_kategorienConnection(variables, options) {
      return requester(Golf_KategorienConnectionDocument, variables, options);
    },
    locations(variables, options) {
      return requester(LocationsDocument, variables, options);
    },
    locationsConnection(variables, options) {
      return requester(LocationsConnectionDocument, variables, options);
    },
    global(variables, options) {
      return requester(GlobalDocument, variables, options);
    },
    globalConnection(variables, options) {
      return requester(GlobalConnectionDocument, variables, options);
    },
    legal(variables, options) {
      return requester(LegalDocument, variables, options);
    },
    legalConnection(variables, options) {
      return requester(LegalConnectionDocument, variables, options);
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
