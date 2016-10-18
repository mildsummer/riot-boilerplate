<todo>
  <h3>{ opts.title }</h3>
  <ul>
    <li each={ item, i in items }>{ item }</li>
  </ul>
  <form onsubmit={ add }>
    <input>
    <button>Add #{ items.length + 1 }</button>
    <script type="text/javascript">
      this.items = [];

      this.add = (e) => {
        event.preventDefault();
        const input = e.target[0];
        this.items.push(input.value);
        input.value = '';
      };
    </script>
  </form>
</todo>