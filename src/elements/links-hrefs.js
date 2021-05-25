// Styles for Gatsby Links and HRefs
import { Link } from 'gatsby'
import styled from 'styled-components'

export const InternalLink = styled(Link)`
  color: ${props => props.theme.colors.grey2};
  font-size: 0.65rem;
  font-weight: 400;
  text-decoration: none;
  position: relative;
  transition: all 200ms ease-in-out;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    top: 100%;
    left: 0;
    background: ${props => props.theme.colors.purple1};
    transition: transform 500ms;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover {
    color: ${props => props.theme.colors.purple1};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

export const HrefLink = styled.a`
  color: ${props => props.theme.colors.purple1};
  font-size: 0.65rem;
  font-weight: 400;
  text-decoration: none;
  position: relative;
  transition: all 200ms ease-in-out;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    top: 100%;
    left: 0;
    background: ${props => props.theme.colors.purple1};
    transition: transform 500ms;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover {
    color: ${props => props.theme.colors.purple1};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

export const HrefNavLink = styled(HrefLink)`
  color: ${props => props.theme.colors.grey2};
`

export const ContainerMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  li {
    display: inline-block;
    margin-right: .75em;

    &:first-of-type {
      display: none;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`

export const ContainerMenuTOC = styled.nav`
  ul {
    line-height: 1rem;
    padding: 0;
  }
  li {
    display: block;
    padding: 0;
  }
`

export const ContainerMenuFooter = styled.div`
`

export const TagLink = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.colors.purple1};
  background: rgba(94, 82, 218, .2);
  border-radius: 6px;
  font-size: 0.525rem;
  font-weight: 400;
  text-decoration: none;
  padding: .15rem .35rem;

  &:hover {
    color: white;
    background: ${props => props.theme.colors.purple2};
    transition: color 300ms ease-in-out,
                background 300ms ease-in-out;
  }
`

export const CopyInternalLink = styled(Link)`
  color: ${props => props.theme.colors.purple2};
  position: relative;
  font-size: 0.75rem;
  transition: all 200ms ease-in-out;
  border-bottom: 2px solid ${props => props.theme.colors.purple3};
  text-decoration: none;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    top: 100%;
    left: 0;
    background: ${props => props.theme.colors.purple1};
    transition: transform 500ms;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover {
    color: ${props => props.theme.colors.purple1};
    background-color: rgba(94, 82, 218, .175);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

export const CopyIntroInternalLink = styled(Link)`
  color: ${props => props.theme.colors.purple2};
  position: relative;
  font-size: .92rem;
  transition: all 200ms ease-in-out;
  border-bottom: 2px solid ${props => props.theme.colors.purple3};
  text-decoration: none;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    top: 100%;
    left: 0;
    background: ${props => props.theme.colors.purple1};
    transition: transform 500ms;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover {
    color: ${props => props.theme.colors.purple1};
    background-color: rgba(94, 82, 218, .175);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

export const CopyHrefLink = styled.a`
  color: ${props => props.theme.colors.purple2};
  position: relative;
  font-size: 0.75rem;
  transition: all 200ms ease-in-out;
  border-bottom: 2px solid ${props => props.theme.colors.purple3};
  text-decoration: none;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    top: 100%;
    left: 0;
    background: ${props => props.theme.colors.purple1};
    transition: transform 500ms;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover {
    color: ${props => props.theme.colors.purple1};
    background-color: rgba(94, 82, 218, .175);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`