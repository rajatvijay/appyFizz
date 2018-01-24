const timeout = 120000;
const sessionId = 'sessionId';
const stagingHost = 'https://staging.com/';
const productionHost = 'https://productionHost.com';

const isTestEnv = () => {
  return window.location.href.includes('localhost') ||
    window.location.href.includes('staging');
};

export function makeAjaxRequest(params) {

  // TODO: get access_token from login state
  // let accessToken = store.getState().loginState.loginDetails.verification.payload.access_token

  switch (params.method) {
    case 'GET':
      return {
        method: 'GET',
        timeout,
        url: params.url,
        headers: {
          sessionId,
        }
      };

    case 'POST':
      return {
        method: 'POST',
        timeout,
        url: params.url,
        headers: {
          sessionId,
        },
        body: params.body
      };

    case 'PUT':
      return {
        method: 'PUT',
        timeout,
        url: params.url,
        headers: {
          sessionId,
        },
        body: params.body
      };

    case 'DELETE':
      return {
        method: 'DELETE',
        timeout,
        url: params.url,
        body: params.body,
        headers: {
          sessionId,
        }
      };

    default:
      return false
  }
}

export function makeUrl(endPoint) {
  if (isTestEnv()) {
    return stagingHost + endPoint;
  } else {
    return productionHost + endPoint;
  }
}
