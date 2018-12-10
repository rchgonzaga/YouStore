/**
 * This is just a function to normalize data between login providers
 * @param {*} info 
 * @param {*} providerName 
 */
export const buildCustomerInfo = (info, providerName) => {
    
    // Avoiding any 'undefined' bug
    let user = {
      email: '',
      firstName: '',
      lastName: '',
      avatarUrl: '',
      provider: {
        uid: '',
        type: '',
      },
    };
  
    if (providerName === 'GOOGLE') {
      user.provider.uid = info.id;
      user.provider.type = providerName;
      user.firstName = info.given_name;
      user.lastName = info.family_name;
      user.email = info.email;
      user.avatarUrl = info.picture;
    } else if (providerName === 'FACEBOOK') {
      const [firstName, ...lastName] = info.name.split(' ');
  
      user.firstName = firstName;
      user.lastName = lastName.join(' ');
      user.provider.uid = info.id;
      user.avatarUrl = info.picture.data.url;
      user.email = info.email;
      user.provider.type = providerName;
    }
  
    return user;
  };