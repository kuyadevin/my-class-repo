fetch(
  // Explain each parameter in comments below.
  // https://docs.github.com/en/rest/reference/issues#list-repository-issues
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// Everything after the ? is a parameter. The per page parameter is meant to tell the link how many items we want per page. Each key following a "&" is a specific parameter that we are targeting.