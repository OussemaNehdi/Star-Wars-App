//name : newDataBase
import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable
  } from 'kysely'
  
  export interface Database {
    actor: ActorTable
    //added only for testing
    
  }
  
  export interface ActorTable {
    id: Generated<number>
    person: string
    eye_color: string
  }

  export type Actor = Selectable<ActorTable>
  export type NewActor = Insertable<ActorTable>
  export type ActorUpdate = Updateable<ActorTable>
