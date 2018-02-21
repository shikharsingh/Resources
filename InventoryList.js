      function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      }

      class InventoryList extends React.Component {
       
        constructor(){ 
          super();
          this.state = {
            Inventory: ["One", "Two", "Three"]
          }
        }
        renderItems(){
          this.state.Inventory.map((item) => (
              <InventoryItem name={item} />
            ));
        }
        render() {
          return (
            <ul className="list-group">
              {
                this.state.Inventory.map((item) => (
                  <InventoryItem name={item} />
                ))
              }
            </ul>
          )
        }
      }

      class InventoryItem extends React.Component {
        render() {
          let {name}=this.props;
          return (
            <div className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small className="pull-right">3 days ago</small>
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>  
            </div>
          )
        }
      }

      ReactDOM.render(<InventoryList/>, document.getElementById('main'));

