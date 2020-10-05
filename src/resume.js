
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/download/docx', function(req, res){
  const file = `${__dirname}/AndrewCopasResume.docx`;
  res.download(file, 'AndrewCopasResume.docx');
});

app.get('/download/pdf', function(req, res){
    const file = `${__dirname}/AndrewCopasResume.pdf`;
    res.download(file, 'AndrewCopasResume.pdf');
  });

app.listen(port, () => console.log(`Resumes on port ${port}!`))