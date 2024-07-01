import type { Schema, Attribute } from '@strapi/strapi';

export interface EventContactPerson extends Schema.Component {
  collectionName: 'components_event_contact_people';
  info: {
    displayName: 'Contact Person';
    icon: 'chartBubble';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    whatsapp: Attribute.String & Attribute.Required;
    instagram: Attribute.String;
    line: Attribute.String;
  };
}

export interface EventMilestone extends Schema.Component {
  collectionName: 'components_event_milestones';
  info: {
    displayName: 'Milestone';
    icon: 'chartBubble';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface EventPayment extends Schema.Component {
  collectionName: 'components_event_payments';
  info: {
    displayName: 'Payment';
    icon: 'chartBubble';
  };
  attributes: {
    proof: Attribute.Media<'images' | 'files'> & Attribute.Required;
    uploadedAt: Attribute.DateTime & Attribute.Required;
  };
}

export interface EventSubmission extends Schema.Component {
  collectionName: 'components_event_submissions';
  info: {
    displayName: 'Submission';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    submission: Attribute.Media<'files'> & Attribute.Required;
    uploadedAt: Attribute.DateTime & Attribute.Required;
  };
}

export interface EventableCompetition extends Schema.Component {
  collectionName: 'components_eventable_competitions';
  info: {
    displayName: 'Competition';
    icon: 'chartBubble';
  };
  attributes: {
    maxParticipants: Attribute.Integer & Attribute.Required;
    submission: Attribute.Media<'files'> & Attribute.Required;
  };
}

export interface EventableSeminar extends Schema.Component {
  collectionName: 'components_eventable_seminars';
  info: {
    displayName: 'Seminar';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    casts: Attribute.Component<'seminar.seminar-cast', true> &
      Attribute.Required;
  };
}

export interface SeminarSeminarCast extends Schema.Component {
  collectionName: 'components_seminar_seminar_casts';
  info: {
    displayName: 'Seminar Cast';
    icon: 'chartBubble';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    photo: Attribute.Media<'images'> & Attribute.Required;
    role: Attribute.Enumeration<['Moderator', 'Speaker']> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'event.contact-person': EventContactPerson;
      'event.milestone': EventMilestone;
      'event.payment': EventPayment;
      'event.submission': EventSubmission;
      'eventable.competition': EventableCompetition;
      'eventable.seminar': EventableSeminar;
      'seminar.seminar-cast': SeminarSeminarCast;
    }
  }
}
