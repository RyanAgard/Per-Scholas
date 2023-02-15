function receciptslist(props) {
    //  console.log(props);
    return (
      <div className="Person">
        <h4>{props.name}</h4>
        <p>{props.main}</p>
        <p>{props.protein}</p>
        <p>{props.rice}</p>
        <p>{props.sauce}</p>
        <p>{props.drink}</p>
        <p>{props.cost}</p>
      </div>
    );
  }
  export default receciptslist;
  