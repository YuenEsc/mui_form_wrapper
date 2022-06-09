const Constants = {
  SERVER_URL:          window.location.origin,
  MEDIA_SERVER:        'https://haulerhero.sirv.com/crm-core-web/',
  AUTH_SERVER:         process.env.REACT_APP_AUTH_SERVER,
  DEV_MODE:            process.env.REACT_APP_MODE === 'dev',
  REDIRECT_KEY:        'redirectPath',
};

export default Constants;