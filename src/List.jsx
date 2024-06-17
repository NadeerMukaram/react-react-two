import PropTypes from 'prop-types'

function List(props){
    
    const itemList = props.items;
    const category = props.category;


    // fruits.sort((a, b) => b.name.localeCompare(a.name)); REVERSE ALPHABETICAL                   
    // fruits.sort((a, b) => a.name.localeCompare(b.name));

    // fruits.sort((a, b) => b.calories - a.calories); REVERSE NUMERICAL   
    // fruits.sort((a, b) => a.calories - b.calories);

    // const lowCalItems = fruits.filter(fruit => fruit.calories < 100); 
    const highCalItems = itemList.filter(fruit => fruit.calories > 100); 

    const  listItems = itemList.map(item => <li key={item.id}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b>
                                                    </li>);

    return( <>
            <h2 className="list-category">{category}</h2>
            <ol className="list-items">{listItems}</ol>
            </>);

}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf[PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string, 
                                                calories: PropTypes.number})],
}

List.defaultProps = {
    category: "category",
    items: [],
}

export default List