export const mapDataToUserList = data => {
  return data.results?.map(user => ({
    name: user?.name?.first,
    lastName: user?.name?.last,
    country: user?.location?.country,
    imageUrl: user?.picture?.large,
  }));
};
