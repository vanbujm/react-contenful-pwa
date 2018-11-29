import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, mapProps } from 'recompose';
import { pick, omit } from 'lodash/object';
import { startCase } from 'lodash/string';

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

const propMapper = props => pick(props.data, ['courses']);

const courseQuery = gql`
  query {
    courses(where: { courseCode: 1 }) {
      title
      locale
      image {
        url
        altText
      }
      shortDescription
      description
      duration
      skillLevel
    }
  }
`;

export default compose(
  graphql(courseQuery),
  mapProps(propMapper)
)(Content);
