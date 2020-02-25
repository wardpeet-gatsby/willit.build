import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MdAdd, MdRemove, MdArrowForward } from "react-icons/md"
import { Link } from "gatsby-interface"

import { visuallyHiddenCss } from "@modules/a11y/stylesheets"
import {
  wrapperStyles,
  questionWrapper,
  questionRowStyles,
  answerStyles,
  expandCollapseButtonStyles,
  titleStyles,
  headerSectionStyles,
  headerTextStyles,
  faqIconStyles,
  contactLinkStyles,
  expandCollapseRowStyles,
} from "./FAQs.styles"

const Question = ({ title, answer, isExpanded, handleToggle }) => {
  return (
    <div css={questionWrapper}>
      <button css={questionRowStyles} onClick={handleToggle}>
        <div css={titleStyles}>{title}</div>

        <div>
          {isExpanded ? (
            <MdRemove css={faqIconStyles} />
          ) : (
            <MdAdd css={faqIconStyles} />
          )}
        </div>
      </button>
      <div css={[answerStyles, !isExpanded && visuallyHiddenCss]}>{answer}</div>
    </div>
  )
}

const FAQs = () => {
  const { allContentfulFaq } = useStaticQuery(graphql`
    {
      allContentfulFaq(sort: {order: ASC, fields: updatedAt}) {
        edges {
          node {
            id
            question
            answer {
              answer
            }
          }
        }
      }
    }
  `)

  const questions = allContentfulFaq.edges
  const [expandedQuestions, setExpandedQuestions] = React.useState({})

  const areAllQuestionsExpanded =
    Object.values(expandedQuestions).filter(shown => shown).length ===
    questions.length

  const toggleExpandAll = () => {
    if (areAllQuestionsExpanded) {
      setExpandedQuestions({})
    } else {
      const allExpandedQuestions = questions.reduce((acc, question) => {
        return {
          ...acc,
          [question.node.id]: true,
        }
      }, {})

      setExpandedQuestions(allExpandedQuestions)
    }
  }

  return (
    <>
      <header>
        <h2 css={headerTextStyles}>Frequently asked questions</h2>
        <div css={headerSectionStyles}>
          <div>
            Can&apos;t find the answer to your question?{" "}
            <Link
              href="https://www.gatsbyjs.com/contact-us/"
              target="_blank"
              css={contactLinkStyles}
            >
              Talk to us{" "}
              <MdArrowForward css={theme => ({ marginLeft: theme.space[2] })} />
            </Link>
          </div>
          {/* Screen readers don't need to toggle items off/on */}
          <div css={expandCollapseRowStyles} aria-hidden={true}>
            <button css={expandCollapseButtonStyles} onClick={toggleExpandAll}>
              {areAllQuestionsExpanded ? "Collapse all" : "Expand all"}
            </button>
          </div>
        </div>
      </header>

      <div css={wrapperStyles}>
        {questions.map(({ node }) => {
          return (
            <Question
              key={node.id}
              title={node.question}
              answer={node.answer.answer}
              isExpanded={!!expandedQuestions[node.id]}
              handleToggle={() =>
                setExpandedQuestions({
                  ...expandedQuestions,
                  [node.id]: !expandedQuestions[node.id],
                })
              }
            />
          )
        })}
      </div>
    </>
  )
}

export default FAQs
