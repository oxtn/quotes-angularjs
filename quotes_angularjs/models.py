from sqlalchemy import (
    Column,
    Integer,
    Text,
    )

from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.orm import (
    scoped_session,
    sessionmaker,
    )

from zope.sqlalchemy import ZopeTransactionExtension

DBSession = scoped_session(sessionmaker(extension=ZopeTransactionExtension()))
Base = declarative_base()

class Quote(Base):
    __tablename__ = 'quote'
    id = Column(Integer, primary_key=True, autoincrement=True)
    quote = Column(Text)
    votes = Column(Integer)

    def __init__(self, quote="", votes=""):
        self.quote = quote
        self.votes = votes
