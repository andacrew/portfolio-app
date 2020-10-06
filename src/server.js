
const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const port = process.env.PORT || 4000;
const fronEndHost = process.env.FRONT_END_HOST || 'http://localhost:3000';

const apiProxy = httpProxy.createProxyServer(app);

apiProxy.on('error', (err, req, res) => {
  console.log(err);
  res.status(500).send('Proxy down :(');
});

app.get('/docx', function(req, res){
  const file = `${__dirname}/download/AndrewCopasResume.docx`;
  res.download(file, 'AndrewCopasResume.docx');
});

app.get('/pdf', function(req, res){
  const file = `${__dirname}/download/AndrewCopasResume.pdf`;
  res.download(file, 'AndrewCopasResume.pdf');
});

app.get('*', (req, res) => {
  apiProxy.web(req, res, { target: fronEndHost });
});

app.listen(port, () => console.log(`Resumes on port ${port}!`))