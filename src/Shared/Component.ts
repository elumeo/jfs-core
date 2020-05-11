import React from 'react';
import { ActionCreator, TypeConstant } from 'typesafe-actions';
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { compose } from 'redux';

export interface ISharedComponentProps<IModuleState, IComponentProps> {
  mapModuleStateToProps: (moduleState: IModuleState, ownProps: IComponentProps) => IComponentProps;
  mapDispatchToProps?: {
    [actionName: string]: ActionCreator<TypeConstant>
  };
  [componentName: string]: any;
}

export default class SharedComponent<IModuleState, IComponentProps> {

  public name: () => string;
  public component: () => React.ComponentType;

  public static mapGlobalStateToModuleState = null;

  public static mapStateToProps = mapModuleStateToProps => (
    state,
    ownProps
  ) => ({
    language: state.languageReducer.language,
    ...mapModuleStateToProps(
      SharedComponent.mapGlobalStateToModuleState(state),
      ownProps
    )
  });

  public static compose = (
    mapModuleStateToProps,
    mapDispatchToProps
  ) => compose(
    connect(
        SharedComponent.mapStateToProps(mapModuleStateToProps),
      mapDispatchToProps || null
    ),
    injectIntl
  );

  constructor(props: ISharedComponentProps<IModuleState, IComponentProps>) {
    const { mapModuleStateToProps, mapDispatchToProps } = props;
    const enhance = SharedComponent.compose(
      mapModuleStateToProps,
      mapDispatchToProps
    );

    this.name = () => SharedComponent.extractComponentName(props);
    this.component = () => enhance(props[this.name()]);
  }

  public register = (mountedComponents) => ({
    ...mountedComponents,
    [this.name()]: this.component()
  });

  public static extractComponentName = <IModuleState, IComponentProps>(
    props: ISharedComponentProps<IModuleState, IComponentProps>
  ): string => (
    Object
      .keys(props)
      .find(key => !['mapModuleStateToProps', 'mapDispatchToProps'].includes(key))
  );

}
