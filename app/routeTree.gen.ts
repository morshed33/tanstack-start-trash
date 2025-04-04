/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RedirectImport } from './routes/redirect'
import { Route as DeferredImport } from './routes/deferred'
import { Route as LayoutImport } from './routes/_layout'
import { Route as PostsIndexImport } from './routes/posts/index'
import { Route as LayoutIndexImport } from './routes/_layout.index'
import { Route as PostsPostIdImport } from './routes/posts/$postId'
import { Route as LayoutAboutImport } from './routes/_layout.about'
import { Route as LayoutChatlayoutChatImport } from './routes/_layout/_chatlayout/chat'
import { Route as LayoutChatlayoutChatIndexImport } from './routes/_layout/_chatlayout/chat.index'

// Create/Update Routes

const RedirectRoute = RedirectImport.update({
  id: '/redirect',
  path: '/redirect',
  getParentRoute: () => rootRoute,
} as any)

const DeferredRoute = DeferredImport.update({
  id: '/deferred',
  path: '/deferred',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  id: '/posts/',
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  id: '/posts/$postId',
  path: '/posts/$postId',
  getParentRoute: () => rootRoute,
} as any)

const LayoutAboutRoute = LayoutAboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutChatlayoutChatRoute = LayoutChatlayoutChatImport.update({
  id: '/_chatlayout/chat',
  path: '/chat',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutChatlayoutChatIndexRoute = LayoutChatlayoutChatIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutChatlayoutChatRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/deferred': {
      id: '/deferred'
      path: '/deferred'
      fullPath: '/deferred'
      preLoaderRoute: typeof DeferredImport
      parentRoute: typeof rootRoute
    }
    '/redirect': {
      id: '/redirect'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectImport
      parentRoute: typeof rootRoute
    }
    '/_layout/about': {
      id: '/_layout/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof LayoutAboutImport
      parentRoute: typeof LayoutImport
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/posts/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof rootRoute
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/posts/': {
      id: '/posts/'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout/_chatlayout/chat': {
      id: '/_layout/_chatlayout/chat'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof LayoutChatlayoutChatImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/_chatlayout/chat/': {
      id: '/_layout/_chatlayout/chat/'
      path: '/'
      fullPath: '/chat/'
      preLoaderRoute: typeof LayoutChatlayoutChatIndexImport
      parentRoute: typeof LayoutChatlayoutChatImport
    }
  }
}

// Create and export the route tree

interface LayoutChatlayoutChatRouteChildren {
  LayoutChatlayoutChatIndexRoute: typeof LayoutChatlayoutChatIndexRoute
}

const LayoutChatlayoutChatRouteChildren: LayoutChatlayoutChatRouteChildren = {
  LayoutChatlayoutChatIndexRoute: LayoutChatlayoutChatIndexRoute,
}

const LayoutChatlayoutChatRouteWithChildren =
  LayoutChatlayoutChatRoute._addFileChildren(LayoutChatlayoutChatRouteChildren)

interface LayoutRouteChildren {
  LayoutAboutRoute: typeof LayoutAboutRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
  LayoutChatlayoutChatRoute: typeof LayoutChatlayoutChatRouteWithChildren
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutAboutRoute: LayoutAboutRoute,
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutChatlayoutChatRoute: LayoutChatlayoutChatRouteWithChildren,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/deferred': typeof DeferredRoute
  '/redirect': typeof RedirectRoute
  '/about': typeof LayoutAboutRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/': typeof LayoutIndexRoute
  '/posts': typeof PostsIndexRoute
  '/chat': typeof LayoutChatlayoutChatRouteWithChildren
  '/chat/': typeof LayoutChatlayoutChatIndexRoute
}

export interface FileRoutesByTo {
  '/deferred': typeof DeferredRoute
  '/redirect': typeof RedirectRoute
  '/about': typeof LayoutAboutRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/': typeof LayoutIndexRoute
  '/posts': typeof PostsIndexRoute
  '/chat': typeof LayoutChatlayoutChatIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/deferred': typeof DeferredRoute
  '/redirect': typeof RedirectRoute
  '/_layout/about': typeof LayoutAboutRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/_layout/': typeof LayoutIndexRoute
  '/posts/': typeof PostsIndexRoute
  '/_layout/_chatlayout/chat': typeof LayoutChatlayoutChatRouteWithChildren
  '/_layout/_chatlayout/chat/': typeof LayoutChatlayoutChatIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/deferred'
    | '/redirect'
    | '/about'
    | '/posts/$postId'
    | '/'
    | '/posts'
    | '/chat'
    | '/chat/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/deferred'
    | '/redirect'
    | '/about'
    | '/posts/$postId'
    | '/'
    | '/posts'
    | '/chat'
  id:
    | '__root__'
    | '/_layout'
    | '/deferred'
    | '/redirect'
    | '/_layout/about'
    | '/posts/$postId'
    | '/_layout/'
    | '/posts/'
    | '/_layout/_chatlayout/chat'
    | '/_layout/_chatlayout/chat/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  DeferredRoute: typeof DeferredRoute
  RedirectRoute: typeof RedirectRoute
  PostsPostIdRoute: typeof PostsPostIdRoute
  PostsIndexRoute: typeof PostsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  DeferredRoute: DeferredRoute,
  RedirectRoute: RedirectRoute,
  PostsPostIdRoute: PostsPostIdRoute,
  PostsIndexRoute: PostsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/deferred",
        "/redirect",
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/about",
        "/_layout/",
        "/_layout/_chatlayout/chat"
      ]
    },
    "/deferred": {
      "filePath": "deferred.tsx"
    },
    "/redirect": {
      "filePath": "redirect.tsx"
    },
    "/_layout/about": {
      "filePath": "_layout.about.tsx",
      "parent": "/_layout"
    },
    "/posts/$postId": {
      "filePath": "posts/$postId.tsx"
    },
    "/_layout/": {
      "filePath": "_layout.index.tsx",
      "parent": "/_layout"
    },
    "/posts/": {
      "filePath": "posts/index.tsx"
    },
    "/_layout/_chatlayout/chat": {
      "filePath": "_layout/_chatlayout/chat.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_chatlayout/chat/"
      ]
    },
    "/_layout/_chatlayout/chat/": {
      "filePath": "_layout/_chatlayout/chat.index.tsx",
      "parent": "/_layout/_chatlayout/chat"
    }
  }
}
ROUTE_MANIFEST_END */
