import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerMachine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Machine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly factoryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMachine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Machine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly factoryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Machine = LazyLoading extends LazyLoadingDisabled ? EagerMachine : LazyMachine

export declare const Machine: (new (init: ModelInit<Machine>) => Machine) & {
  copyOf(source: Machine, mutator: (draft: MutableModel<Machine>) => MutableModel<Machine> | void): Machine;
}

type EagerFactory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Factory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly imgURL?: string | null;
  readonly Machines?: (Machine | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFactory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Factory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly imgURL?: string | null;
  readonly Machines: AsyncCollection<Machine>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Factory = LazyLoading extends LazyLoadingDisabled ? EagerFactory : LazyFactory

export declare const Factory: (new (init: ModelInit<Factory>) => Factory) & {
  copyOf(source: Factory, mutator: (draft: MutableModel<Factory>) => MutableModel<Factory> | void): Factory;
}