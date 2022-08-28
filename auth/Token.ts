export interface Token {
  sub: string;
  email: string;
  iat: number;
  project: string;
  role: string;
  exp: number;
}

export class Token {
  constructor(
    sub: string,
    email: string,
    iat: number,
    role: string,
    exp: number,
  ) {
    this.sub = sub;
    this.email = email;
    this.iat = iat;
    this.role = role;
    this.exp = exp;
  }

  hasAccess(): boolean {
    return this.role !== 'viewer';
  }

  serialize() {
    return {
      sub: this.sub,
      email: this.email,
      iat: this.iat,
      role: this.role,
      exp: this.exp,
    };
  }
}
