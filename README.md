# Liane UI

Design system for Liane

## Figma

UI Design placed in https://www.figma.com/file/8KXcNUwilQGGHrUmnb9dCV/Liane-Design-System?node-id=728%3A291

## Tech

We use TSdx

More info https://tsdx.io/

## Dev

From the root folter running `npm run start` we can have our code always updated as we updated the available components

To have a playground while we developing a new component, in a new tab, move to the example folder

```
cd example
npm start
```

That will open a new tab at http://localhost:1234/

The content to be seen is placed in `example/index.tsx` and we can use in here all the components in the src folder

/Users/marcosriganti/Projects/liane-tsdx/dist/index.d.ts

# StoryBook

To open the new one:

`npm run storybook`

Will run up on http://localhost:6006/ and we can check from there how the documentaiton will look like.

To view Storybook online: http://lianetoolkit.github.io/liane-ui

# Deploy

2 Steps deploy

`npm run predeploy`

Then to update the url

`npm run deploy-storybook`
