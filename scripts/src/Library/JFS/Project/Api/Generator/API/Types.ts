import DTO from './DTO';
import Client from './Client';

export namespace API {
  export type Description = {
    dtos: DTO.Group[];
    clients: Client.Description[];
  }

  export type Configuration = {
    [controller: string]: string[];
  }

  export type Remote = {
    host: string;
    path: string;
    configuration: Configuration;
  };

  export type LocalSettings = {
    api: {
      core: boolean;
      namespace: string;
      webSocketClient: boolean;
    };
    remote: Remote;
  }

  export namespace Static {
    export type Preprocess = (
      options: {
        namespace: string;
      },
      description: API.Description
    ) => API.Description;

    export type Describe = (parameters: {
      remote: {
        host: string;
        path: string;
        configuration: API.Configuration;
      };
      onDescription: (description: API.Description) => void;
    }) => void;

    export type Generate = (parameters: {
      description: API.Description;
      options: {
        namespace: string;
        core: boolean;
      };
      onComplete: (code: string) => void;
    }) => void;

    export type Render = (parameters: {
      local: {
        namespace: string;
        core: boolean;
        webSocketClient: boolean;
      };
      remote: {
        dtos: DTO.Group[];
        clients: Client.Description[];
      }
    }) => string;

    export type Format = (code: string) => string;
  }
}
