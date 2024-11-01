/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface hasTitile {
  title: any
 }

class Component<T> {
  constructor (public props:T) {

  }
}

class Page<T extends hasTitile> extends Component<T> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};