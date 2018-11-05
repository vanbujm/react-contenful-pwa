import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../actions';

import './Content.css';

const { content: fetchContent } = actionCreators;

const splitToLocale = (content) => (locales, key) => {
  const data = content[key];
  const localesForKey = Object.keys(data);
  localesForKey.forEach((locale) => {
    locales[locale] = { ...locales[locale], [key]: content[key][locale] };
  });
  return locales;
};

const parseFields = (key, value, locale) => {
  if (typeof value === 'string') return value;
  switch (key) {
    case 'image':
      const localeWithDefault = value.fields.file[locale] === undefined ? value.fields.file[Object.keys(value.fields.file)[0]] : locale;
      const url = value.fields.file[localeWithDefault].url;
      const title = value.fields.title[localeWithDefault];
      return <img className="content-img" src={url} alt={title}/>;
    case 'duration':
      return value;
    default:
      return '';
  }
};

const fieldsFor = (contentObj, locale) => Object.keys(contentObj).map(
  (key) => {
    if (typeof contentObj[key] !== 'string') console.log(key, contentObj[key]);
    return <div className="content-field"
                key={key}>
      <span style={{ fontWeight: 'bold' }}>{key}: </span>
      {parseFields(key, contentObj[key], locale)}
    </div>;
  });

export const Content = (props) => {
  const { content } = props;
  if (Object.keys(content).length === 0) props.fetchContent();

  const localeSplitData = Object.keys(content).reduce(splitToLocale(content), {});

  const fields = Object.keys(localeSplitData).map(locale => <div key={locale}>
    <h2>{locale}</h2>
    {fieldsFor(localeSplitData[locale], locale)}
  </div>);

  return <div>
    <h1>Content</h1>
    <div>{fields}</div>
  </div>;
};

const mapDispatchToProps = {
  fetchContent
};

const mapState = (state) => ({ content: state.content.fields || {} });

export default connect(mapState, mapDispatchToProps)(Content);