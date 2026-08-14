export const getProfileInitials = (name) => {
    return name
      .split(/\s+/)
      .map((alph) => alph[0])
      .join("");
  };

  export const getGithubUrl = (username) => {
    return `https://github.com/${username}/`
  }