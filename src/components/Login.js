import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

export const Login = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return(
      <div className="logger">
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <select className="form-control">
            <option>Option one</option>
            <option>Option two</option>
            <option>Option three</option>
            <option>Option four</option>
            <option>Option five</option>
            <option>Option six</option>
            <option>Option seven</option>
            <option>Option eight</option>
          </select>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> This is a checkbox 
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> This is a checkbox too
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="radios" checked />
              Keep your options open
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="radios" />
              Be sure to remember to check for unknown unknowns
            </label>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-form btn-default">Cancel</button>
            <Link to={'/files'} className="btn btn-form btn-primary" onClick={() => this.props.startSeeding()}>OK</Link>
          </div>
        </form>
      </div>
    )
  }
})
