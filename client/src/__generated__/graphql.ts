/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProduct?: Maybe<Array<Maybe<Product>>>;
  createProduct?: Maybe<Product>;
  removeProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateManyProductArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};


export type MutationCreateProductArgs = {
  brand: Scalars['String'];
  colour: Scalars['String'];
  description: Scalars['String'];
  height: Scalars['Float'];
  img_url: Scalars['String'];
  length: Scalars['Float'];
  model_code: Scalars['String'];
  name: Scalars['String'];
  power: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Float'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  brand?: InputMaybe<Scalars['String']>;
  colour?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  img_url?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  model_code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type Product = {
  __typename?: 'Product';
  brand: Scalars['String'];
  colour: Scalars['String'];
  description: Scalars['String'];
  height: Scalars['Float'];
  id: Scalars['ID'];
  img_url: Scalars['String'];
  length: Scalars['Float'];
  model_code: Scalars['String'];
  name: Scalars['String'];
  power: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Float'];
};

export type ProductFilter = {
  brand?: InputMaybe<Scalars['String']>;
  brand_neq?: InputMaybe<Scalars['String']>;
  colour?: InputMaybe<Scalars['String']>;
  colour_neq?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_neq?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  height_gt?: InputMaybe<Scalars['Float']>;
  height_gte?: InputMaybe<Scalars['Float']>;
  height_lt?: InputMaybe<Scalars['Float']>;
  height_lte?: InputMaybe<Scalars['Float']>;
  height_neq?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  img_url?: InputMaybe<Scalars['String']>;
  img_url_neq?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  length_gt?: InputMaybe<Scalars['Float']>;
  length_gte?: InputMaybe<Scalars['Float']>;
  length_lt?: InputMaybe<Scalars['Float']>;
  length_lte?: InputMaybe<Scalars['Float']>;
  length_neq?: InputMaybe<Scalars['Float']>;
  model_code?: InputMaybe<Scalars['String']>;
  model_code_neq?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['String']>;
  power_neq?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_neq?: InputMaybe<Scalars['Float']>;
  q?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantity_gt?: InputMaybe<Scalars['Int']>;
  quantity_gte?: InputMaybe<Scalars['Int']>;
  quantity_lt?: InputMaybe<Scalars['Int']>;
  quantity_lte?: InputMaybe<Scalars['Int']>;
  quantity_neq?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
  weight_gt?: InputMaybe<Scalars['Int']>;
  weight_gte?: InputMaybe<Scalars['Int']>;
  weight_lt?: InputMaybe<Scalars['Int']>;
  weight_lte?: InputMaybe<Scalars['Int']>;
  weight_neq?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Float']>;
  width_gt?: InputMaybe<Scalars['Float']>;
  width_gte?: InputMaybe<Scalars['Float']>;
  width_lt?: InputMaybe<Scalars['Float']>;
  width_lte?: InputMaybe<Scalars['Float']>;
  width_neq?: InputMaybe<Scalars['Float']>;
};

export type ProductInput = {
  brand: Scalars['String'];
  colour: Scalars['String'];
  description: Scalars['String'];
  height: Scalars['Float'];
  id: Scalars['ID'];
  img_url: Scalars['String'];
  length: Scalars['Float'];
  model_code: Scalars['String'];
  name: Scalars['String'];
  power: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  Product?: Maybe<Product>;
  _allProductsMeta?: Maybe<ListMetadata>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type Query_ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type Query_ProductsQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'Product', id: string, name: string, power: string, description: string, price: number, quantity: number, brand: string, weight: number, height: number, width: number, length: number, model_code: string, colour: string, img_url: string } | null> | null };


export const Query_ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"query_products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"power"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"model_code"}},{"kind":"Field","name":{"kind":"Name","value":"colour"}},{"kind":"Field","name":{"kind":"Name","value":"img_url"}}]}}]}}]} as unknown as DocumentNode<Query_ProductsQuery, Query_ProductsQueryVariables>;