createTextBox(){
    return(
    <form onSubmit={this.handleSubmit}>
      <label>
        What multiply?
        <input type="text" name="randomValue" onChange={this.handleChange} value={this.state.unsavedInputVal || 0} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    );
  }