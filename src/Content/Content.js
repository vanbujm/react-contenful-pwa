import React from 'react';
import { graphql } from 'react-apollo';
import { compose, mapProps, branch } from 'recompose';
import { pick, omit } from 'lodash/object';
import { startCase } from 'lodash/string';
import { loader } from 'graphql.macro';

import Loading from '../Loading';
import './Content.css';

const splitToLocale = (locales, course) => {
  if (locales[course.locale] === undefined) locales[course.locale] = [];
  locales[course.locale].push(omit(course, 'locale'));
  return locales;
};

const parseFields = (key, value) => {
  if (typeof value === 'string') return value;
  switch (key) {
    case 'image':
      return (
        <img className="content-img" src={value.url} alt={value.altText} />
      );
    case 'duration':
      return value;
    default:
      return '';
  }
};

const fieldsFor = contentArr =>
  contentArr.map(course => {
    return Object.keys(course).map(key => (
      <div className="content-field" key={key}>
        <span style={{ fontWeight: 'bold' }}>{key}: </span>
        {parseFields(key, course[key])}
      </div>
    ));
  });

export const Content = ({ courses = [] }) => {
  const localeSplitCourses = courses.reduce(splitToLocale, {});
  const fields = Object.keys(localeSplitCourses).map(locale => (
    <div key={locale}>
      <h2>{startCase(locale)}</h2>
      {fieldsFor(localeSplitCourses[locale])}
    </div>
  ));

  return (
    <div>
      <h1>Content</h1>
      <div>{fields}</div>
    </div>
  );
};

const propMapper = ({ data }) => pick(data, ['courses']);

const courseQuery = loader('./courseQuery.graphql');

export default compose(
  graphql(courseQuery),
  branch(
    ({ data }) => data.courses === undefined && data.loading,
    () => () => Loading({ isLoading: true })
  ),
  branch(
    ({ data }) => data.courses === undefined && data.error,
    () => () => Loading({ error: true })
  ),
  mapProps(propMapper)
)(Content);
