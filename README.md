# appyFizz
An API config helper for production AS WELL AS staging ready frontend code

> __Note: This is WIP.__
> Most part of it is not configurable yet.


### Problems it is solving faced during the calling of an API from a frontend codebase:

1. Calling different __hosts__ when developing on local or maybe depending upon the evironment(staging/production).
2. Making the __ajax settings object__ every time calling an API even though most of the times it looks more or less the same.
3. Identifying the environment correclty without any mistakes(This is super important since if you are calling staging
server from your production env., you are in deep shit!)
4. Every time writing the __host__ in the URL when making the API call.


### Function Description:

1. `isTestEnv`:
<br> __Takes__: Nothing
<br> __Returns__:  `true` if the evn is localhost or staging(should include "staging" text in the host name).
2. `makeAjaxRequest`:
<br> __Takes_: `params` object with only the varying info about the ajax settings object like `method`, `body` etc.
<br> __Returns__: Ajax settings object in the proper format by adding other required header and parameters.
3. `makeUrl`:
<br> __Takes__: A string representing the end point of the URL
<br>__Returns__: A string representing the whole url depending on the env.


### Task List

- [ ] Make it an npm lib(maybe for using it as a local module)
- [ ] Export functions to configure it with staging and production URLs
- [ ] Erro handling in case `makeAjaxRequests`.
- [ ] Better naming of the functions
- [ ] Accomodating variable `Request Header` for same codebase
