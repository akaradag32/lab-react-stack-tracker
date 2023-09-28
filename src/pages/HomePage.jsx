function HomePage({ companieList }) {
  console.log(companieList);

  return (
    <div>
      <h1>
        StackTracker: Discover Tech Stacks Used by Top CompanieListcompanieList
      </h1>
      {companieList.map((companie) => {
        return (
          <div className='product-list-container'>
            <div className='product-card'>
              <img src={companie.logo} alt={companie.name} />
              <h3 className='product-title'>{companie.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
