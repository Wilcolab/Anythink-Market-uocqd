import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
} from "../../constants/actionTypes";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});


function Home(props) {
  let { token, tags, onLoad, onUnload, onClickTag } = props;
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    const tab = "all";
    const itemsPromise = agent.Items.all;

    if (title.length > 2) {
      // search for items only if title length is at least 3 characters
      onLoad(
        tab,
        itemsPromise,
        Promise.all([agent.Tags.getAll(), itemsPromise(title)])
      );
    } else {
      // otherwise load all items
      onLoad(
        tab,
        itemsPromise,
        Promise.all([agent.Tags.getAll(), itemsPromise()])
      );
    }

    return () => {
      onUnload();
    };
  }, [onLoad, onUnload, title, token]);

  return (
    <div className="home-page">
      <Banner title={title} setTitle={setTitle} />

      <div className="container page">
        <Tags tags={tags} onClickTag={onClickTag} />
        <MainView />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
