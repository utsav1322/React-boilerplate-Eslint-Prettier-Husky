/**
 *
 * Stpl
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStpl from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { PageTitle, PageTitleWrapper } from './style';

export function Stpl({ dispatch }) {
  useInjectReducer({ key: 'stpl', reducer });
  useInjectSaga({ key: 'stpl', saga });

  return (
    <div>
      <Helmet>
        <title>Stpl</title>
        <meta name="description" content="Description of Stpl" />
      </Helmet>
      <PageTitleWrapper>
        <PageTitle>
          <FormattedMessage {...messages.header} />
        </PageTitle>
      </PageTitleWrapper>
    </div>
  );
}

Stpl.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stpl: makeSelectStpl(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Stpl);
