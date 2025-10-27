fetch('userProfiles.json')
  .then(r => {
    if (!r.ok) throw new Error('Fetch error:' + r.status);
    return r.json();
  })
  .then(users => {
  })
  .catch(console.error);